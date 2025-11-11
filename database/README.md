# 데이터베이스 설정 가이드

## 1. 데이터베이스 생성

### MySQL/MariaDB
```sql
CREATE DATABASE teammate CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE teammate;
```

### PostgreSQL
```sql
CREATE DATABASE teammate;
\c teammate;
```

## 2. 스키마 실행

### MySQL/MariaDB
```bash
mysql -u root -p teamate < database/schema.sql
```

### PostgreSQL
```bash
psql -U postgres -d teamate -f database/schema.sql
```

## 3. 초기 데이터 삽입 (선택사항)

```sql
-- 테스트용 관리자 계정
INSERT INTO users (email, password_hash, name, role) 
VALUES ('admin@teammate.com', '$2b$10$...', '관리자', 'admin');

-- 테스트용 교수 계정
INSERT INTO users (email, password_hash, name, role) 
VALUES ('professor@teammate.com', '$2b$10$...', '김교수', 'professor');
```

## 4. ORM 설정 (Prisma 예시)

### Prisma 설치
```bash
npm install prisma @prisma/client
npx prisma init
```

### Prisma Schema 예시
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id          BigInt    @id @default(autoincrement())
  email       String    @unique @db.VarChar(255)
  passwordHash String   @map("password_hash") @db.VarChar(255)
  name        String    @db.VarChar(100)
  studentId   String?   @unique @map("student_id") @db.VarChar(50)
  role        UserRole  @default(STUDENT)
  createdAt   DateTime  @default(now()) @map("created_at")
  updatedAt   DateTime  @updatedAt @map("updated_at")
  deletedAt   DateTime? @map("deleted_at")

  profile     Profile?
  teamMembers TeamMember[]
  activities  Activity[]
  feedbacks   Feedback[]

  @@map("users")
}

enum UserRole {
  STUDENT
  PROFESSOR
  ADMIN
}
```

## 5. 환경 변수 설정

`.env` 파일 생성:
```env
DATABASE_URL="mysql://user:password@localhost:3306/teammate"
# 또는 PostgreSQL
# DATABASE_URL="postgresql://user:password@localhost:5432/teammate"
```

## 6. 마이그레이션 실행

### Prisma
```bash
npx prisma migrate dev --name init
npx prisma generate
```

### TypeORM
```bash
npm run typeorm migration:run
```

## 7. 데이터베이스 확인

### Prisma Studio
```bash
npx prisma studio
```

### MySQL CLI
```bash
mysql -u root -p teamate
SHOW TABLES;
DESCRIBE users;
```

## 8. 백업 및 복원

### 백업
```bash
mysqldump -u root -p teamate > backup.sql
```

### 복원
```bash
mysql -u root -p teamate < backup.sql
```


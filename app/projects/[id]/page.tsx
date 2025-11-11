import Link from 'next/link'
import { ArrowLeftIcon, UserGroupIcon, CalendarIcon, TagIcon } from '@heroicons/react/24/outline'

// This would normally fetch from an API
const projectDetails: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'AI 기반 학습 추천 시스템',
    description: '머신러닝을 활용한 개인 맞춤형 학습 추천 플랫폼 개발',
    fullDescription: '이 프로젝트는 학생들의 학습 패턴을 분석하여 개인 맞춤형 학습 콘텐츠를 추천하는 AI 시스템을 개발합니다. 협업 필터링과 콘텐츠 기반 필터링을 결합한 하이브리드 추천 시스템을 구현합니다.',
    status: '진행중',
    members: 5,
    tags: ['AI', 'Machine Learning', 'Python'],
    progress: 65,
    startDate: '2024-09-01',
    endDate: '2025-06-30',
    teamMembers: [
      { name: '김학생', role: '팀장', major: '컴퓨터공학과' },
      { name: '이학생', role: '백엔드 개발', major: '컴퓨터공학과' },
      { name: '박학생', role: 'AI 엔지니어', major: '인공지능학과' },
      { name: '최학생', role: '프론트엔드 개발', major: '소프트웨어학과' },
      { name: '정학생', role: '데이터 분석', major: '통계학과' },
    ],
  },
  '2': {
    id: 2,
    title: '스마트 캠퍼스 앱',
    description: '대학생을 위한 통합 캠퍼스 생활 관리 애플리케이션',
    fullDescription: '대학생의 일상 생활을 편리하게 만들어주는 통합 앱입니다. 시간표 관리, 도서관 좌석 예약, 식당 메뉴 확인, 버스 시간표 등 다양한 기능을 제공합니다.',
    status: '계획중',
    members: 4,
    tags: ['Mobile', 'React Native', 'IoT'],
    progress: 20,
    startDate: '2025-03-01',
    endDate: '2025-12-31',
    teamMembers: [
      { name: '강학생', role: '팀장', major: '모바일공학과' },
      { name: '윤학생', role: '앱 개발', major: '소프트웨어학과' },
      { name: '임학생', role: 'UI/UX 디자인', major: '디자인학과' },
      { name: '한학생', role: '백엔드 개발', major: '컴퓨터공학과' },
    ],
  },
  '3': {
    id: 3,
    title: '블록체인 기반 학점 인증 시스템',
    description: '투명하고 안전한 학점 관리 시스템',
    fullDescription: '블록체인 기술을 활용하여 학점의 무결성과 투명성을 보장하는 시스템입니다. 스마트 컨트랙트를 통해 자동화된 학점 인증 프로세스를 구현합니다.',
    status: '완료',
    members: 6,
    tags: ['Blockchain', 'Smart Contract', 'Web3'],
    progress: 100,
    startDate: '2024-03-01',
    endDate: '2024-12-31',
    teamMembers: [
      { name: '조학생', role: '팀장', major: '컴퓨터공학과' },
      { name: '신학생', role: '블록체인 개발', major: '정보보안학과' },
      { name: '오학생', role: '스마트 컨트랙트', major: '컴퓨터공학과' },
      { name: '서학생', role: '프론트엔드', major: '소프트웨어학과' },
      { name: '유학생', role: '보안 분석', major: '정보보안학과' },
      { name: '홍학생', role: '테스터', major: '컴퓨터공학과' },
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id] || projectDetails['1']

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 mb-8"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          프로젝트 목록으로
        </Link>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center gap-x-4 mb-4">
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${
                project.status === '진행중' ? 'bg-green-50 text-green-700' :
                project.status === '계획중' ? 'bg-yellow-50 text-yellow-700' :
                'bg-gray-50 text-gray-700'
              }`}>
                {project.status}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <UserGroupIcon className="mr-1 h-4 w-4" />
                {project.members}명 참여
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{project.description}</p>
            
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>진행률</span>
                <span>{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-primary-600 h-3 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10"
                >
                  <TagIcon className="mr-1 h-4 w-4" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 소개</h2>
            <p className="text-gray-700 leading-7">{project.fullDescription}</p>
          </div>

          <div className="border-t border-gray-200 pt-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트 정보</h2>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  시작일
                </dt>
                <dd className="text-base text-gray-900">{project.startDate}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 flex items-center mb-1">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  종료일
                </dt>
                <dd className="text-base text-gray-900">{project.endDate}</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">팀 멤버</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.teamMembers.map((member: any, index: number) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-50 p-4 ring-1 ring-gray-900/5"
                >
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                      {member.name[0]}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">{member.major}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <button className="rounded-md bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">
              프로젝트 참여하기
            </button>
            <button className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


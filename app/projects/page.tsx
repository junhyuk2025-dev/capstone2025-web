import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'AI 기반 학습 추천 시스템',
    description: '머신러닝을 활용한 개인 맞춤형 학습 추천 플랫폼 개발',
    status: '진행중',
    members: 5,
    tags: ['AI', 'Machine Learning', 'Python'],
    progress: 65,
  },
  {
    id: 2,
    title: '스마트 캠퍼스 앱',
    description: '대학생을 위한 통합 캠퍼스 생활 관리 애플리케이션',
    status: '계획중',
    members: 4,
    tags: ['Mobile', 'React Native', 'IoT'],
    progress: 20,
  },
  {
    id: 3,
    title: '블록체인 기반 학점 인증 시스템',
    description: '투명하고 안전한 학점 관리 시스템',
    status: '완료',
    members: 6,
    tags: ['Blockchain', 'Smart Contract', 'Web3'],
    progress: 100,
  },
  {
    id: 4,
    title: '실시간 협업 코딩 플랫폼',
    description: '여러 명이 동시에 코드를 작성하고 리뷰할 수 있는 플랫폼',
    status: '진행중',
    members: 3,
    tags: ['Web', 'WebSocket', 'React'],
    progress: 45,
  },
  {
    id: 5,
    title: 'VR 기반 가상 강의실',
    description: '몰입형 가상 현실 환경에서의 온라인 학습 경험',
    status: '계획중',
    members: 7,
    tags: ['VR', 'Unity', '3D'],
    progress: 10,
  },
  {
    id: 6,
    title: '데이터 시각화 대시보드',
    description: '복잡한 데이터를 직관적으로 시각화하는 웹 대시보드',
    status: '진행중',
    members: 4,
    tags: ['Data Visualization', 'D3.js', 'TypeScript'],
    progress: 75,
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">모든 프로젝트</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            학생들이 진행 중인 다양한 프로젝트를 탐색하고 참여하세요.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                    project.status === '진행중' ? 'bg-green-50 text-green-700' :
                    project.status === '계획중' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-gray-50 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-gray-500">{project.members}명 참여</span>
                </div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>진행률</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-500"
                >
                  자세히 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


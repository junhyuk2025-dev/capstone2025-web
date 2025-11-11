import Link from 'next/link'
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  ClockIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: '프로젝트 관리',
    description: '효율적으로 프로젝트를 생성하고 관리하세요.',
    icon: DocumentTextIcon,
  },
  {
    name: '팀 협업',
    description: '실시간으로 팀원들과 소통하고 협업하세요.',
    icon: UserGroupIcon,
  },
  {
    name: '진행 상황 추적',
    description: '프로젝트의 진행 상황을 한눈에 확인하세요.',
    icon: ChartBarIcon,
  },
  {
    name: '학습 자료',
    description: '대학 커리큘럼과 연계된 학습 자료를 제공합니다.',
    icon: AcademicCapIcon,
  },
  {
    name: '시간 관리',
    description: '마일스톤과 데드라인을 효율적으로 관리하세요.',
    icon: ClockIcon,
  },
  {
    name: '혁신적인 도구',
    description: '최신 기술을 활용한 협업 도구를 제공합니다.',
    icon: LightBulbIcon,
  },
]

const projects = [
  {
    id: 1,
    title: 'AI 기반 학습 추천 시스템',
    description: '머신러닝을 활용한 개인 맞춤형 학습 추천 플랫폼',
    status: '진행중',
    members: 5,
    tags: ['AI', 'Machine Learning', 'Python'],
  },
  {
    id: 2,
    title: '스마트 캠퍼스 앱',
    description: '대학생을 위한 통합 캠퍼스 생활 관리 애플리케이션',
    status: '계획중',
    members: 4,
    tags: ['Mobile', 'React Native', 'IoT'],
  },
  {
    id: 3,
    title: '블록체인 기반 학점 인증 시스템',
    description: '투명하고 안전한 학점 관리 시스템',
    status: '완료',
    members: 6,
    tags: ['Blockchain', 'Smart Contract', 'Web3'],
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              TeamMate
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              대학생 팀 프로젝트 협업 및 매칭 통합 플랫폼. 팀 구성부터 협업, 성과 분석까지 한 곳에서.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/matching"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                팀 매칭 시작하기
              </Link>
              <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
                대시보드 보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#7dd3fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">통합 플랫폼</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              팀 구성부터 협업까지, 모든 것을 한 곳에서
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              대학생 팀 프로젝트의 비효율성을 해결하는 통합 플랫폼입니다.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">인기 프로젝트</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              학생들이 진행 중인 다양한 프로젝트를 확인해보세요.
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
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              지금 바로 시작하세요
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-100">
              새로운 프로젝트를 시작하거나 기존 프로젝트에 참여하여 함께 성장하세요.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/matching"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                팀 매칭 시작하기
              </Link>
              <Link href="/login" className="text-sm font-semibold leading-6 text-white">
                로그인하기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


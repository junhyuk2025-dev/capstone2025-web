'use client'

import Link from 'next/link'
import { 
  UserGroupIcon, 
  CalendarIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const myTeams = [
  {
    id: 1,
    name: '웹 개발 프로젝트 팀',
    subject: '웹 프로그래밍',
    members: 5,
    progress: 65,
    tasks: { total: 20, completed: 13 },
    nextMeeting: '2025-01-15 14:00',
  },
  {
    id: 2,
    name: 'AI 추천 시스템',
    subject: '인공지능',
    members: 4,
    progress: 45,
    tasks: { total: 15, completed: 7 },
    nextMeeting: '2025-01-16 10:00',
  },
]

const recentActivities = [
  { id: 1, team: '웹 개발 프로젝트 팀', action: '새로운 작업이 추가되었습니다', time: '2시간 전' },
  { id: 2, team: 'AI 추천 시스템', action: '김학생님이 파일을 업로드했습니다', time: '5시간 전' },
  { id: 3, team: '웹 개발 프로젝트 팀', action: '이학생님이 작업을 완료했습니다', time: '1일 전' },
]

const upcomingTasks = [
  { id: 1, title: '프론트엔드 컴포넌트 구현', team: '웹 개발 프로젝트 팀', dueDate: '2025-01-15', priority: 'high' },
  { id: 2, title: 'API 문서 작성', team: 'AI 추천 시스템', dueDate: '2025-01-16', priority: 'medium' },
  { id: 3, title: '데이터베이스 설계 검토', team: '웹 개발 프로젝트 팀', dueDate: '2025-01-17', priority: 'low' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="mt-2 text-lg text-gray-600">
            내 팀들의 진행 상황을 한눈에 확인하세요
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-lg">
                <UserGroupIcon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">참여 중인 팀</p>
                <p className="text-2xl font-bold text-gray-900">{myTeams.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">완료된 작업</p>
                <p className="text-2xl font-bold text-gray-900">
                  {myTeams.reduce((sum, team) => sum + team.tasks.completed, 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <ClockIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">진행 중인 작업</p>
                <p className="text-2xl font-bold text-gray-900">
                  {myTeams.reduce((sum, team) => sum + (team.tasks.total - team.tasks.completed), 0)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <ChartBarIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">평균 진행률</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(myTeams.reduce((sum, team) => sum + team.progress, 0) / myTeams.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 내 팀 목록 */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">내 팀</h2>
            <div className="space-y-4">
              {myTeams.map((team) => (
                <Link
                  key={team.id}
                  href={`/team/${team.id}`}
                  className="block bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{team.subject}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UserGroupIcon className="h-5 w-5 mr-1" />
                      {team.members}명
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">진행률</span>
                      <span className="font-medium text-gray-900">{team.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all"
                        style={{ width: `${team.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>
                      작업: {team.tasks.completed}/{team.tasks.total}
                    </span>
                    <span className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      다음 미팅: {team.nextMeeting}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 최근 활동 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">최근 활동</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border-l-4 border-primary-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">{activity.team}</p>
                    <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 다가오는 작업 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">다가오는 작업</h3>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          task.priority === 'high'
                            ? 'bg-red-100 text-red-700'
                            : task.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {task.priority === 'high' ? '높음' : task.priority === 'medium' ? '보통' : '낮음'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{task.team}</p>
                    <p className="text-xs text-gray-600">마감: {task.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 빠른 액션 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">빠른 액션</h3>
              <div className="space-y-2">
                <Link
                  href="/matching"
                  className="flex items-center w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-sm font-medium"
                >
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  새 팀 찾기
                </Link>
                <Link
                  href="/team/new"
                  className="flex items-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  팀 생성하기
                </Link>
                <button className="flex items-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 text-sm font-medium">
                  <VideoCameraIcon className="h-5 w-5 mr-2" />
                  화상 회의 시작
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


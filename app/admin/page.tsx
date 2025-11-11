'use client'

import { useState } from 'react'
import { 
  UserGroupIcon, 
  ChartBarIcon, 
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const allTeams = [
  {
    id: 1,
    name: '웹 개발 프로젝트 팀',
    subject: '웹 프로그래밍',
    members: 5,
    progress: 65,
    status: 'active',
    lastActivity: '2025-01-14',
  },
  {
    id: 2,
    name: 'AI 추천 시스템',
    subject: '인공지능',
    members: 4,
    progress: 45,
    status: 'active',
    lastActivity: '2025-01-13',
  },
  {
    id: 3,
    name: '모바일 앱 개발',
    subject: '모바일 프로그래밍',
    members: 3,
    progress: 30,
    status: 'warning',
    lastActivity: '2025-01-10',
  },
  {
    id: 4,
    name: '데이터 분석 프로젝트',
    subject: '데이터베이스',
    members: 6,
    progress: 80,
    status: 'active',
    lastActivity: '2025-01-14',
  },
]

const teamStats = {
  total: 24,
  active: 18,
  warning: 4,
  inactive: 2,
  averageProgress: 58,
}

const recentActivities = [
  { id: 1, team: '웹 개발 프로젝트 팀', action: '새로운 작업 완료', time: '1시간 전' },
  { id: 2, team: 'AI 추천 시스템', action: '파일 업로드', time: '3시간 전' },
  { id: 3, team: '데이터 분석 프로젝트', action: '팀 회의 진행', time: '5시간 전' },
]

export default function AdminPage() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">교수용 관리자 페이지</h1>
          <p className="mt-2 text-lg text-gray-600">
            모든 팀의 활동을 모니터링하고 관리하세요
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
                <p className="text-sm font-medium text-gray-600">전체 팀</p>
                <p className="text-2xl font-bold text-gray-900">{teamStats.total}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircleIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">활성 팀</p>
                <p className="text-2xl font-bold text-gray-900">{teamStats.active}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">주의 필요</p>
                <p className="text-2xl font-bold text-gray-900">{teamStats.warning}</p>
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
                <p className="text-2xl font-bold text-gray-900">{teamStats.averageProgress}%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 팀 목록 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">팀 목록</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {allTeams.map((team) => (
                  <div
                    key={team.id}
                    onClick={() => setSelectedTeam(team.id)}
                    className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedTeam === team.id ? 'bg-primary-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{team.subject}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          team.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {team.status === 'active' ? '활성' : '주의'}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">진행률</span>
                        <span className="font-medium text-gray-900">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            team.status === 'active' ? 'bg-primary-600' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <UserGroupIcon className="h-4 w-4 mr-1" />
                        {team.members}명
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        마지막 활동: {team.lastActivity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
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

            {/* 피드백 작성 */}
            {selectedTeam && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">피드백 작성</h3>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm mb-4"
                  placeholder="팀에 대한 피드백을 작성하세요..."
                />
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md font-medium hover:bg-primary-700">
                  피드백 전송
                </button>
              </div>
            )}

            {/* 필터 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">필터</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    과목
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                    <option>전체</option>
                    <option>웹 프로그래밍</option>
                    <option>인공지능</option>
                    <option>모바일 프로그래밍</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상태
                  </label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                    <option>전체</option>
                    <option>활성</option>
                    <option>주의 필요</option>
                    <option>비활성</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


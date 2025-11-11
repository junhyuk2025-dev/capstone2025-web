'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const matchingModes = [
  {
    id: 'auto',
    title: '자동 매칭',
    description: '전공, 역할, 성향을 기반으로 최적의 팀을 자동으로 매칭해드립니다',
    icon: SparklesIcon,
    color: 'bg-primary-600',
  },
  {
    id: 'direct',
    title: '직접 팀 구성',
    description: '원하는 팀원을 직접 선택하여 팀을 구성할 수 있습니다',
    icon: UserGroupIcon,
    color: 'bg-green-600',
  },
  {
    id: 'recommend',
    title: '추천 팀 참여',
    description: 'AI가 추천하는 팀에 참여할 수 있습니다',
    icon: AcademicCapIcon,
    color: 'bg-purple-600',
  },
]

const recommendedTeams = [
  {
    id: 1,
    name: '웹 개발 프로젝트 팀',
    subject: '웹 프로그래밍',
    members: 3,
    maxMembers: 5,
    neededRoles: ['프론트엔드', '백엔드'],
    matchScore: 95,
    description: 'React와 Node.js를 활용한 풀스택 웹 애플리케이션 개발',
  },
  {
    id: 2,
    name: 'AI 기반 추천 시스템',
    subject: '인공지능',
    members: 4,
    maxMembers: 6,
    neededRoles: ['AI 엔지니어', '데이터 분석'],
    matchScore: 88,
    description: '머신러닝을 활용한 개인화 추천 시스템 개발',
  },
  {
    id: 3,
    name: '모바일 앱 개발',
    subject: '모바일 프로그래밍',
    members: 2,
    maxMembers: 4,
    neededRoles: ['모바일 개발', 'UI/UX 디자이너'],
    matchScore: 82,
    description: 'React Native를 활용한 크로스 플랫폼 앱 개발',
  },
]

export default function MatchingPage() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [autoMatching, setAutoMatching] = useState(false)

  const handleAutoMatch = () => {
    setAutoMatching(true)
    // 자동 매칭 로직
    setTimeout(() => {
      setAutoMatching(false)
      // 매칭 결과 페이지로 이동
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">팀 매칭</h1>
          <p className="mt-2 text-lg text-gray-600">
            원하는 방식으로 팀을 구성하거나 참여하세요
          </p>
        </div>

        {/* 매칭 방식 선택 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-12">
          {matchingModes.map((mode) => {
            const Icon = mode.icon
            return (
              <div
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`relative rounded-lg border-2 p-6 cursor-pointer transition-all ${
                  selectedMode === mode.id
                    ? 'border-primary-600 bg-primary-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                }`}
              >
                <div className={`${mode.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{mode.title}</h3>
                <p className="text-sm text-gray-600">{mode.description}</p>
                {selectedMode === mode.id && (
                  <div className="mt-4 flex items-center text-primary-600">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">선택됨</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* 자동 매칭 섹션 */}
        {selectedMode === 'auto' && (
          <div className="bg-white rounded-lg shadow p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">자동 매칭 설정</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  과목 선택
                </label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>웹 프로그래밍</option>
                  <option>인공지능</option>
                  <option>모바일 프로그래밍</option>
                  <option>데이터베이스</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  선호하는 팀 크기
                </label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500">
                  <option>3-4명</option>
                  <option>4-5명</option>
                  <option>5-6명</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleAutoMatch}
              disabled={autoMatching}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {autoMatching ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  매칭 중...
                </>
              ) : (
                '자동 매칭 시작'
              )}
            </button>
          </div>
        )}

        {/* 추천 팀 목록 */}
        {selectedMode === 'recommend' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">추천 팀</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {recommendedTeams.map((team) => (
                <div
                  key={team.id}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{team.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{team.subject}</p>
                    </div>
                    <div className="flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {team.matchScore}% 매칭
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{team.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <UserGroupIcon className="h-5 w-5 mr-1" />
                      {team.members}/{team.maxMembers}명
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {team.neededRoles.map((role) => (
                        <span
                          key={role}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/team/${team.id}`}
                    className="flex items-center justify-center w-full bg-primary-600 text-white py-2 px-4 rounded-md font-medium hover:bg-primary-700"
                  >
                    팀 상세보기
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 직접 팀 구성 */}
        {selectedMode === 'direct' && (
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">직접 팀 구성</h2>
            <p className="text-gray-600 mb-6">
              팀을 생성하고 원하는 팀원을 초대하거나, 기존 팀에 참여할 수 있습니다.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/team/new"
                className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-md font-medium hover:bg-primary-700 text-center"
              >
                새 팀 만들기
              </Link>
              <Link
                href="/teams"
                className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-md font-medium hover:bg-gray-200 text-center"
              >
                팀 목록 보기
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


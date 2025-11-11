'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  CalendarIcon, 
  DocumentTextIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClockIcon,
  PaperClipIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

const teamMembers = [
  { id: 1, name: '김학생', role: '팀장', major: '컴퓨터공학과', avatar: 'K' },
  { id: 2, name: '이학생', role: '프론트엔드', major: '소프트웨어학과', avatar: 'L' },
  { id: 3, name: '박학생', role: '백엔드', major: '컴퓨터공학과', avatar: 'P' },
  { id: 4, name: '최학생', role: '디자이너', major: '디자인학과', avatar: 'C' },
  { id: 5, name: '정학생', role: '프론트엔드', major: '소프트웨어학과', avatar: 'J' },
]

const tasks = [
  { id: 1, title: '홈페이지 레이아웃 설계', assignee: '이학생', status: 'completed', dueDate: '2025-01-10' },
  { id: 2, title: 'API 엔드포인트 구현', assignee: '박학생', status: 'in-progress', dueDate: '2025-01-15' },
  { id: 3, title: 'UI 디자인 시스템 구축', assignee: '최학생', status: 'in-progress', dueDate: '2025-01-16' },
  { id: 4, title: '데이터베이스 스키마 설계', assignee: '박학생', status: 'todo', dueDate: '2025-01-18' },
  { id: 5, title: '로그인 기능 구현', assignee: '이학생', status: 'todo', dueDate: '2025-01-20' },
]

const files = [
  { id: 1, name: '프로젝트 기획서.pdf', uploader: '김학생', date: '2025-01-10', size: '2.3 MB' },
  { id: 2, name: '디자인 시안.fig', uploader: '최학생', date: '2025-01-11', size: '5.1 MB' },
  { id: 3, name: 'API 문서.md', uploader: '박학생', date: '2025-01-12', size: '156 KB' },
]

const schedule = [
  { id: 1, title: '주간 회의', date: '2025-01-15', time: '14:00', type: 'meeting' },
  { id: 2, title: '중간 발표 준비', date: '2025-01-20', time: '10:00', type: 'deadline' },
  { id: 3, title: '코드 리뷰', date: '2025-01-17', time: '16:00', type: 'meeting' },
]

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'files' | 'schedule'>('overview')

  const tabs = [
    { id: 'overview', name: '개요' },
    { id: 'tasks', name: '작업' },
    { id: 'files', name: '파일' },
    { id: 'schedule', name: '일정' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">웹 개발 프로젝트 팀</h1>
              <p className="text-gray-600 mt-1">웹 프로그래밍</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                <VideoCameraIcon className="h-5 w-5 mr-2" />
                화상 회의
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                채팅
              </button>
            </div>
          </div>

          {/* 진행률 */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">전체 진행률</span>
              <span className="font-medium text-gray-900">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-primary-600 h-3 rounded-full transition-all"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>

          {/* 탭 */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 메인 컨텐츠 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 개요 탭 */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
                <p className="text-gray-600 mb-6">
                  React와 Node.js를 활용한 풀스택 웹 애플리케이션 개발 프로젝트입니다.
                  사용자 친화적인 인터페이스와 안정적인 백엔드 시스템을 구축하는 것이 목표입니다.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">시작일</p>
                    <p className="text-lg font-semibold text-gray-900">2025-01-01</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">마감일</p>
                    <p className="text-lg font-semibold text-gray-900">2025-03-31</p>
                  </div>
                </div>
              </div>
            )}

            {/* 작업 탭 */}
            {activeTab === 'tasks' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">작업 목록</h2>
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-sm">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    작업 추가
                  </button>
                </div>
                <div className="space-y-3">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center flex-1">
                        {task.status === 'completed' ? (
                          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                        ) : task.status === 'in-progress' ? (
                          <ClockIcon className="h-5 w-5 text-yellow-600 mr-3" />
                        ) : (
                          <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-3" />
                        )}
                        <div className="flex-1">
                          <p className={`font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                            {task.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            담당: {task.assignee} · 마감: {task.dueDate}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          task.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : task.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {task.status === 'completed' ? '완료' : task.status === 'in-progress' ? '진행중' : '대기'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 파일 탭 */}
            {activeTab === 'files' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">파일</h2>
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-sm">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    파일 업로드
                  </button>
                </div>
                <div className="space-y-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center flex-1">
                        <PaperClipIcon className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {file.uploader} · {file.date} · {file.size}
                          </p>
                        </div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        다운로드
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 일정 탭 */}
            {activeTab === 'schedule' && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">일정</h2>
                  <button className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-sm">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    일정 추가
                  </button>
                </div>
                <div className="space-y-4">
                  {schedule.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center p-4 border border-gray-200 rounded-lg"
                    >
                      <div className={`p-3 rounded-lg mr-4 ${
                        item.type === 'meeting' ? 'bg-primary-100' : 'bg-red-100'
                      }`}>
                        <CalendarIcon className={`h-6 w-6 ${
                          item.type === 'meeting' ? 'text-primary-600' : 'text-red-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          {item.date} {item.time}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'meeting' ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {item.type === 'meeting' ? '회의' : '마감일'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 팀 멤버 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">팀 멤버</h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                      {member.avatar}
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role} · {member.major}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 빠른 통계 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">통계</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">완료된 작업</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tasks.filter(t => t.status === 'completed').length}/{tasks.length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">진행 중인 작업</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {tasks.filter(t => t.status === 'in-progress').length}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">업로드된 파일</p>
                  <p className="text-2xl font-bold text-gray-900">{files.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


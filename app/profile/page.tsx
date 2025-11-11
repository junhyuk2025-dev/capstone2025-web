'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AcademicCapIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline'

const majors = [
  '컴퓨터공학과',
  '소프트웨어학과',
  '인공지능학과',
  '정보보안학과',
  '전자공학과',
  '기계공학과',
  '산업공학과',
  '경영학과',
  '디자인학과',
  '기타',
]

const roles = [
  { id: 'leader', name: '팀장', description: '프로젝트 전체를 이끌고 조율합니다' },
  { id: 'frontend', name: '프론트엔드 개발', description: '사용자 인터페이스를 개발합니다' },
  { id: 'backend', name: '백엔드 개발', description: '서버 및 데이터베이스를 구축합니다' },
  { id: 'designer', name: '디자이너', description: 'UI/UX 디자인을 담당합니다' },
  { id: 'pm', name: '프로젝트 매니저', description: '일정 및 리소스를 관리합니다' },
  { id: 'researcher', name: '연구원', description: '기술 조사 및 분석을 수행합니다' },
]

const personalities = [
  { id: 'active', name: '적극적', description: '능동적으로 의견을 제시하고 행동합니다' },
  { id: 'cooperative', name: '협조적', description: '팀원들과 잘 협력하며 조화롭게 일합니다' },
  { id: 'analytical', name: '분석적', description: '데이터와 사실에 기반하여 판단합니다' },
  { id: 'creative', name: '창의적', description: '새로운 아이디어와 해결책을 제시합니다' },
  { id: 'organized', name: '체계적', description: '계획적이고 정리된 방식으로 일합니다' },
]

export default function ProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    major: '',
    roles: [] as string[],
    personality: '',
    bio: '',
  })

  const handleRoleToggle = (roleId: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(roleId)
        ? prev.roles.filter((id) => id !== roleId)
        : [...prev.roles, roleId],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 프로필 저장 로직
    router.push('/matching')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">프로필 등록</h2>
            <p className="mt-1 text-sm text-gray-600">
              팀 매칭을 위해 프로필 정보를 입력해주세요
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-8">
            {/* 전공 선택 */}
            <div>
              <label className="flex items-center text-base font-medium text-gray-900 mb-3">
                <AcademicCapIcon className="h-5 w-5 mr-2 text-primary-600" />
                전공
              </label>
              <select
                required
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value="">전공을 선택하세요</option>
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
            </div>

            {/* 역할 선택 */}
            <div>
              <label className="flex items-center text-base font-medium text-gray-900 mb-3">
                <BriefcaseIcon className="h-5 w-5 mr-2 text-primary-600" />
                선호하는 역할 (복수 선택 가능)
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    onClick={() => handleRoleToggle(role.id)}
                    className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                      formData.roles.includes(role.id)
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex flex-1">
                      <div className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          {role.name}
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          {role.description}
                        </span>
                      </div>
                    </div>
                    {formData.roles.includes(role.id) && (
                      <div className="absolute top-4 right-4">
                        <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 성향 선택 */}
            <div>
              <label className="flex items-center text-base font-medium text-gray-900 mb-3">
                <UserIcon className="h-5 w-5 mr-2 text-primary-600" />
                협업 성향
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {personalities.map((personality) => (
                  <div
                    key={personality.id}
                    onClick={() => setFormData({ ...formData, personality: personality.id })}
                    className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                      formData.personality === personality.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex flex-1">
                      <div className="flex flex-col">
                        <span className="block text-sm font-medium text-gray-900">
                          {personality.name}
                        </span>
                        <span className="mt-1 flex items-center text-sm text-gray-500">
                          {personality.description}
                        </span>
                      </div>
                    </div>
                    {formData.personality === personality.id && (
                      <div className="absolute top-4 right-4">
                        <div className="h-5 w-5 rounded-full bg-primary-600 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 자기소개 */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                자기소개 (선택사항)
              </label>
              <textarea
                id="bio"
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                placeholder="자신을 소개해주세요..."
              />
            </div>

            {/* 제출 버튼 */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={!formData.major || formData.roles.length === 0 || !formData.personality}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                프로필 저장
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


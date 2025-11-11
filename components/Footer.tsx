import Link from 'next/link'

const navigation = {
  main: [
    { name: '홈', href: '/' },
    { name: '프로젝트', href: '/projects' },
    { name: '팀 찾기', href: '/teams' },
    { name: '도움말', href: '/help' },
  ],
  legal: [
    { name: '개인정보처리방침', href: '/privacy' },
    { name: '이용약관', href: '/terms' },
    { name: '문의하기', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <nav className="mt-10 flex justify-center space-x-10" aria-label="Footer">
          {navigation.legal.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2025 UniCollab. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


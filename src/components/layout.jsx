import { MdNotes, MdMenu, MdArchive } from 'react-icons/md'
import { NavLink } from './nav-link'

function Layout({ children, showArchived, setShowArchived }) {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <MdMenu className="w-5 h-5" />
          </button>

          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            data-hs-overlay="#create-note-modal"
          >
            Add New Note
          </button>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            My Notes
          </a>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <NavLink
                active={!showArchived}
                onClick={() => setShowArchived(false)}
                icon={MdNotes}
              >
                All Notes
              </NavLink>
            </li>

            <li>
              <NavLink
                active={showArchived}
                onClick={() => setShowArchived(true)}
                icon={MdArchive}
              >
                Archived
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full pt-4 px-4 sm:px-6 md:px-8 lg:pl-72">
        {children}
      </div>
    </div>
  )
}

export { Layout }

import { MdArchive, MdDelete, MdUnarchive, MdSearch } from 'react-icons/md'
import { showFormattedDate } from '../utils/showFormattedDate'
import { useState } from 'react'

function NoteList({ notes, setNotes }) {
  const [search, setSearch] = useState('')

  function searchNote(e) {
    setSearch(e.target.value)
  }

  const toggleArchive = (id) => () => {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === id) {
          return { ...note, archived: !note.archived }
        }
        return note
      })
    })
  }

  const removeNote = (id) => () => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  return (
    <>
      <div className="max-w-lg mx-auto">
        <label
          htmlFor="hs-trailing-button-add-on-with-icon"
          className="sr-only"
        >
          Label
        </label>

        <div className="flex rounded-md shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on-with-icon"
            name="hs-trailing-button-add-on-with-icon"
            className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            value={search}
            onChange={searchNote}
          />
          <button className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
            <MdSearch className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {notes
            .filter((note) => {
              if (search) {
                return note.title.toLowerCase().includes(search)
              }

              return true
            })
            .map((note) => (
              <div
                key={note.id}
                className="group flex flex-col h-full bg-white shadow-sm hover:shadow-lg transition-shadow rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
              >
                <div className="p-4 md:p-6 relative">
                  {note.archived ? (
                    <MdUnarchive
                      className="absolute right-8 md:right-12 w-6 h-6 text-blue-400 cursor-pointer"
                      onClick={toggleArchive(note.id)}
                    />
                  ) : (
                    <MdArchive
                      className="absolute right-8 md:right-12 w-6 h-6 text-green-400 cursor-pointer"
                      onClick={toggleArchive(note.id)}
                    />
                  )}

                  <MdDelete
                    className="absolute right-4 md:right-6 w-6 h-6 text-red-400 cursor-pointer"
                    onClick={removeNote(note.id)}
                  />

                  <h3 className="mb-1 text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {note.title}
                  </h3>

                  <time className="block text-xs text-gray-300 dark:text-gray-400">
                    {showFormattedDate(note.createdAt)}
                  </time>

                  <p className="mt-3 text-gray-500">{note.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export { NoteList }

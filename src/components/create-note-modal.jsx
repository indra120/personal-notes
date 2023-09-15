import { MdClose } from 'react-icons/md'
import { Input } from './input'
import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal'
import { InputLabel } from './input-label'
import { useState } from 'react'

function CreateNoteModal({ setNotes }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [error, setError] = useState('')

  function handleTitle(e) {
    const { value } = e.target

    if (value.length > 50) {
      setError('Max 50 character')
    } else {
      if (error.title) {
        setError('')
      }
      setTitle(value)
    }
  }

  function handleBody(e) {
    setBody(e.target.value)
  }

  function createNote() {
    const timestamp = +new Date()
    const newNote = {
      id: timestamp,
      title,
      body,
      createdAt: timestamp,
      archived: false,
    }

    setNotes((prev) => [newNote, ...prev])
  }

  return (
    <Modal name="create-note">
      <ModalHeader>
        <h3 className="font-bold text-gray-800 dark:text-white">
          Create a new Note
        </h3>

        <button
          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
          data-hs-overlay="#create-note-modal"
        >
          <span className="sr-only">Close</span>
          <MdClose className="w-3.5 h-3.5" />
        </button>
      </ModalHeader>

      <ModalBody>
        <>
          <div className="flex justify-between items-center">
            <InputLabel htmlFor="title">Title</InputLabel>
            <span className="block text-sm text-gray-500 mb-2">
              {50 - title.length}/50
            </span>
          </div>

          <Input
            name="title"
            placeholder="Server Actions"
            required
            value={title}
            onChange={handleTitle}
            error={error}
          />
        </>

        <>
          <InputLabel htmlFor="body">Content</InputLabel>
          <textarea
            id="body"
            name="body"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            rows="3"
            placeholder="Server Action are bla bla bla"
            value={body}
            onChange={handleBody}
            required
          ></textarea>
        </>
      </ModalBody>

      <ModalFooter>
        <button
          className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          data-hs-overlay="#create-note-modal"
        >
          Cancel
        </button>

        <button
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={createNote}
          data-hs-overlay="#create-note-modal"
        >
          Save
        </button>
      </ModalFooter>
    </Modal>
  )
}

export { CreateNoteModal }

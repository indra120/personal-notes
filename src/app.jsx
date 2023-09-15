import { useState } from 'react'
import { Layout } from './components/layout'
import { NoteList } from './components/note-list'
import { initialData } from './utils/initialData'
import { CreateNoteModal } from './components/create-note-modal'

function App() {
  const [notes, setNotes] = useState(initialData)
  const [showArchived, setShowArchived] = useState(false)

  return (
    <>
      <Layout showArchived={showArchived} setShowArchived={setShowArchived}>
        <NoteList
          notes={notes.filter((note) =>
            showArchived ? note.archived : !note.archived
          )}
          setNotes={setNotes}
        />
      </Layout>

      <CreateNoteModal setNotes={setNotes} />
    </>
  )
}

export { App }

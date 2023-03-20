import NewChat from "./NewChat"

function Sidebar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                { /* new chat */}
                <NewChat />

                <div>
                    { /* ModelSelection */ }
                </div>

                { /* map through the chat rows */ }
            </div>
        </div>
    </div>
  )
}

export default Sidebar
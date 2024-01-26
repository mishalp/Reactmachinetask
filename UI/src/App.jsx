import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Support from "./pages/support/Support"
import Plugins from "./pages/plugins/Plugins"
import Help from "./pages/help/Help"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/plugins" element={<Plugins />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

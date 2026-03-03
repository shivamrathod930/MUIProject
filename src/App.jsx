import './App.css'
import { Outlet } from "react-router";
import Stack from '@mui/material/Stack';
import Feed from './components/Feed';
import RigthBar from './components/RightBar';
import LeftBar from './components/LeftBar';
import NavBar from './components/Navbar';



function App() {



  return (
    <>
      <NavBar />

      <Stack direction="row" justifyContent='space-between'>
        <RigthBar />
        <Feed />
        <LeftBar />
      </Stack>
      <Outlet/>
    </>
  )
}

export default App

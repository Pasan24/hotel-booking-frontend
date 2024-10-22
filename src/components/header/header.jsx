import UserTag from '../userData/userdata.jsx';

function Header() {
  return (
    <header className="w-ful bg-blue-300 flex h-[100px] 
     relative items-center " >

      
      <h1 className='text-white text-[30px] ml-[10px]'>Hotel Management System</h1>
      <UserTag />
    </header>
  );
}

export default Header;

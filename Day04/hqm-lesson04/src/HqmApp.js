import logo from './logo.svg';
import './App.css';
import HqmFuncComp from './components/HqmFuncComp';
import HqmFuncComp1 from './components/HqmFuncComp1';
import HqmClassComp from './components/HqmClassComp';

function HqmApp() {
  const users = {
    fullName:'Ha Quang Minh',
    age:19,
    phone:"096969996"
  }
  return (
    <div className="container bordermt-3">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <HqmFuncComp name="Quang Minh" address="69 Say Gex" company="SayGex999" />
          <hr/>
          <HqmFuncComp name="Trinh Tran Phuong Tuan" address="99 Say Gex" company="SayGex999" /> 
      </div>
      <div className='alert alert-danger'>
          <HqmFuncComp1 renderInfo={users}/>
      </div>
      <HqmClassComp />
      {/* chuyển dữ liệu từ HqmApp -> xuống HqmClassComp */}
      <HqmClassComp renderName="K23cnt3" renderUsers={users} />
    </div>
  );
}

export default HqmApp;

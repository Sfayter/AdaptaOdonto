import './style.scss'
import Header from "../../components/Header";
import { Outlet} from 'react-router-dom';
export default function AdminMain(){
    return(
        <div className="admin-main">
            <Header/>
            <Outlet />
        </div>
    )
}
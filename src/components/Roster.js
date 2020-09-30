import React,{ useState } from 'react';
import MemberCard from './MemberCard';
import Obj from './data/members.json';
import Filter from './Filter';
import './stylesheets/Roster.css';

const Roster = () => {
    const [mems, setMems] = useState(Obj.Members);
    const [sort, setSort] = useState("Class");

    const doSort = (props) => {
        if (props === "Class"){
            setMems(mems.sort((a, b) => {
                let fa = a.class.toLowerCase();
                let fb = b.class.toLowerCase();
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))
        }else if (props === "Major"){
            setMems(mems.sort((a, b) => {
                let fa = a.major.toLowerCase();
                let fb = b.major.toLowerCase();
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))
        }else if (props === "Graduation Date"){
            setMems(mems.sort((a, b) => {
                let fa = new Date(a.graduationDate);
                let fb = new Date(b.graduationDate);
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))
        }else if (props === "Position"){
            setMems(mems.sort((a, b) => {
                let fa = a.position.toLowerCase();
                let fb = b.position.toLowerCase();
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))
        }else if (props === "First Name"){
            setMems(mems.sort((a, b) => {
                let fa = a.fname.toLowerCase();
                let fb = b.fname.toLowerCase();
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))
        }else if (props === "Last Name"){
            setMems(mems.sort((a, b) => {
                let fa = a.lname.toLowerCase();
                let fb = b.lname.toLowerCase();
        
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }))            
        }
        else {
            console.log(props)
        }
        setSort(props,sort)
    }

    return (
        <div className="ui container">
            <div>
                <Filter 
                    sortables={Obj.Sortables}
                    doSort={doSort}
                />
                {  }
            </div>
            <div className="ui grid"> 
                <div className="four column row">
                    { 
                        mems.map((props) => 
                        <MemberCard
                            fname={props.fname}
                            lname={props.lname}
                            gradDate={props.graduationDate}
                            position={props.position}
                            major={props.major}
                            image={props.image}
                        />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Roster;
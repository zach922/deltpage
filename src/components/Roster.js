import React,{ useState } from 'react';
import MemberCard from './MemberCard';
import Obj from './data/members.json';
import Filter from './Filter';
import './stylesheets/Roster.css';




const Roster = () => {
    const Members = Obj.Members;

    const [mems, setMems] = useState(Members);
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
        }else if (props === "Field of Study"){
            console.log(props)
        }else if (props === "Graduation Date"){
            console.log(props)
        }else if (props === "Position"){
            console.log(props)
        }else if (props === "Name"){
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
        }else {
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
            <div className="ui column grid container"> 
                <div className="two column row">
                    { 
                        mems.map((props) => 
                        <MemberCard 
                            fname={props.fname}
                            lname={props.lname}
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
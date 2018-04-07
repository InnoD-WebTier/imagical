import React from 'react';
import Member from '../components/Member';
import '../styles/index.css';

export default class Team extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title">MEET THE TEAM</h1>
                <h2 className="subtitle">executive board</h2>
                <div className="team__member-container">
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                </div>
                <h2 className="subtitle">directors</h2>
                <div className="team__member-container">
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                </div>
                <h2 className="subtitle">project managers</h2>
                <div className="team__member-container">
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                </div>
                <h2 className="subtitle">team members</h2>
                <div className="team__member-container">
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                    <Member name="Adam Dada" position="internal vp" imageUri={require('../images/adam.jpg')} />
                </div>
            </div>
        );
    }
}

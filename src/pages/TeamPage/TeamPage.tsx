import React from 'react';
import Hero from '../../components/Hero/Hero';
import { MEMBERS } from '../../globals';
import Member from './Member/Member';
import './TeamPage.scss';
import TeamContent from './content.json';

const TeamPage = () => (
  <>
    <Hero {...TeamContent.hero} />

    <div className="content-wrapper team-wrapper">
      <div className="team-members">
        <Member {...MEMBERS.Rossan} />
        <Member {...MEMBERS.Thiago} />
      </div>
    </div>
  </>
);

export default TeamPage;

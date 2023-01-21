import React from 'react';
import Hero from '../../components/Hero/Hero';
import { HERO, MEMBERS } from '../../globals';
import Member from './Member/Member';
import './TeamPage.scss';

const TeamPage = () => (
  <>
    <Hero {...HERO.team} />

    <div className="content-wrapper team-wrapper">
      <div className="team-members">
        <Member {...MEMBERS.Rossan} />
        <Member {...MEMBERS.Thiago} />
      </div>
    </div>
  </>
);

export default TeamPage;

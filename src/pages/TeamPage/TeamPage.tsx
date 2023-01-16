import React from 'react';
import Title from '../../components/Title/Title';
import { MEMBERS } from '../../globals';
import Member from './Member/Member';
import './TeamPage.scss';

const TeamPage = () => (
  <div className="content-wrapper team-wrapper">
    <Title content="Executivos" />

    <div className="team-members">
      <Member {...MEMBERS.Rossan} />
      <Member {...MEMBERS.Thiago} />
    </div>
  </div>
);

export default TeamPage;

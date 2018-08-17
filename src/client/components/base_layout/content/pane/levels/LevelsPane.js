import React from 'react';
import GameSelector from 'Components/game_selector/GameSelector';
import LevelsList from 'Components/levels/LevelsList';
import './style.scss';

const LevelsPane = () => (
  <div id="levels-pane" className="col-2">
    <div id="game-selectors">
      <GameSelector label="GE" key="ge" />
      <GameSelector label="PD" key="pd" />
    </div>
    <LevelsList />
  </div>
);

module.exports = LevelsPane;

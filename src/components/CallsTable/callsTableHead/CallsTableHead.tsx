import React from 'react';

export const CallsTableHead = () => {
  return (
    <div>
      <tr>
      <th style={{width:"4%"}}>Тип</th>
      <th style={{width:"6%"}} className="sortable">Время</th>
      <th style={{width:"10%"}}>Сотрудник</th>
      <th style={{width:"24%"}}>Звонок</th>
      <th style={{width:"15%"}}>Источник</th>
      <th style={{width:"14%"}}>Оценка</th>
      <th className="align-right sortable">Длительность</th>
      </tr>
    </div>
  );
};


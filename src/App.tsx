import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import { Person } from './types/person';

const App: React.FC = () => {
  const [currentPerson, setCurrentPerson] = useState<Person | undefined>(undefined);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (person: Person) => {
    setCurrentPerson(person);
  };

  const handleSave = () => {
    setCurrentPerson(undefined);
    setRefresh(!refresh);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        ระบบจัดการบุคคล
      </Typography>
      <PersonForm currentPerson={currentPerson} onSave={handleSave} />
      <PersonList onEdit={handleEdit} />
    </Container>
  );
};

export default App;

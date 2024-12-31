import React, { useEffect, useState } from 'react';
import { getPersons, deletePerson } from '../api/personApi';
import { Button, Typography, Box, Card, CardContent } from '@mui/material';
import { Person } from '../types/person';

type PersonListProps = {
  onEdit: (person: Person) => void;
};

const PersonList: React.FC<PersonListProps> = ({ onEdit }) => {
  const [persons, setPersons] = useState<Person[]>([]);

  const fetchPersons = async () => {
    const { data } = await getPersons();
    setPersons(data);
  };

  const handleDelete = async (id: string) => {
    await deletePerson(id);
    fetchPersons();
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        รายการบุคคล
      </Typography>
      {persons.map((person) => (
        <Card key={person._id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography>
              {person.firstName} {person.lastName} - อายุ: {person.age} ปี
            </Typography>
            <Typography>เพศ: {person.gender}</Typography>
            <Typography>วันเกิด: {new Date(person.birthDate).toLocaleDateString()}</Typography>
            <Button variant="contained" color="primary" onClick={() => onEdit(person)}>
              แก้ไข
            </Button>
            <Button variant="contained" color="secondary" onClick={() => handleDelete(person._id!)} style={{ marginLeft: '10px' }}>
              ลบ
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PersonList;

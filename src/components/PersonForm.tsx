import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Person } from '../types/person';

type PersonFormProps = {
  currentPerson?: Person;
  onSave: () => void;
};

const PersonForm: React.FC<PersonFormProps> = ({ currentPerson, onSave }) => {
  const [formData, setFormData] = useState<Person>(
    currentPerson || { firstName: '', lastName: '', birthDate: '', age: 0, gender: '' }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'age' ? +value : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
    setFormData({ firstName: '', lastName: '', birthDate: '', age: 0, gender: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginBottom: 2 }}>
      <TextField
        name="firstName"
        label="ชื่อ"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="lastName"
        label="นามสกุล"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="birthDate"
        label="วันเกิด"
        type="date"
        value={formData.birthDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        name="age"
        label="อายุ"
        type="number"
        value={formData.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="gender"
        label="เพศ"
        value={formData.gender}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        {currentPerson ? 'อัปเดต' : 'เพิ่ม'}
      </Button>
    </Box>
  );
};

export default PersonForm;

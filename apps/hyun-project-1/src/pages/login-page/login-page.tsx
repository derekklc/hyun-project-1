import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: pink;
`;

export function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <form>
        <div>
          <label htmlFor="name">username:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}

export default LoginPage;

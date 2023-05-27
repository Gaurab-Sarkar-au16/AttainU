import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/Italian"}>
        <h4>Italian</h4>
        <FaPizzaSlice />
      </SLink>
      <SLink to={"/cuisine/American"}>
        <h4>American</h4>
        <FaHamburger />
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <h4>Thai</h4>
        <GiNoodles />
      </SLink>
      <SLink to={"/cuisine/Japanese"}>
        <h4>Japanese</h4>
        <GiChopsticks />
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    // font-size: 1rem;
    margin: 0;
  }

  svg {
    color: white;
    font-size: 3.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
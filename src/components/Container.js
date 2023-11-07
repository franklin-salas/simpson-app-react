import  styled  from "styled-components";

export const Container = ({children}) => {
  return (
    <Content>
        {children}
    </Content>
  )
}

const Content  = styled.div`
        maz-width:1200px;
        padding:40px;
        margin: 0 auto`;

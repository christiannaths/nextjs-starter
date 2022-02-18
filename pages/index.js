import styled from 'styled-components';

const Layout = styled.div`
  padding: 1.5rem 2rem;
`;

function HomePage() {
  return (
    <Layout>
      <div>
        <h1 data-testid="title">Welcome to NextJS!</h1>
        <p>
          Nothing left to do but start working! Edit <code>pages/index.js</code> to get
          started.
        </p>

        <p>Good luck!</p>
      </div>
    </Layout>
  );
}

async function getStaticProps() {
  return {
    props: {},
  };
}

HomePage.defaultProps = {};
HomePage.propTypes = {};

export { getStaticProps };
export default HomePage;

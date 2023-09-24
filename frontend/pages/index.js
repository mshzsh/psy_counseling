import React from 'react'

import HomeContent from 'components/Home/HomeContent'
import api from 'utils/api'

const Home = ({ counselorsList }) => {
  console.log(counselorsList, 'counselorList')

  return <HomeContent />
}

export default Home

export const getStaticProps = async () => {
  const counselorsList = await api
    .getExperts({ params: {} })
    .then(({ data }) => data)

  return {
    props: {
      counselorsList: counselorsList || [],
    },
  }
}

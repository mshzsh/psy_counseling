import React, { useEffect } from 'react'

// comonents
import CommonLayout from 'layouts/CommonLayout'
import CounselorsContent from 'components/Counselors/CounselorsContent'

// Api
import api from 'utils/api'

export async function getStaticProps() {
  const expertsList = await api.getExperts({ params: {} }).then(res => res.data)

  return {
    props: {
      expertsList: expertsList || [],
    },
    // revalidate: 10,
  }
}

const Counselors = ({ expertsList }) => {
  useEffect(() => {
    console.log('expertsList', expertsList)
  }, [])

  return (
    <CommonLayout
      title="مشاوران"
      description="مشاوران"
      breadcrumbsRoutes={[
        {
          id: 1,
          text: 'خانه',
          link: '/',
        },
        {
          id: 2,
          text: 'مشاوران',
        },
      ]}
    >
      <CounselorsContent />
    </CommonLayout>
  )
}

export default Counselors

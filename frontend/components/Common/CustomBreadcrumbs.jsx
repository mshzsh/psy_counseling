import React from 'react'

// Next
import Link from 'next/link'

// mui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

// components
import Container from 'components/Common/Container'

const CustomBreadcrumbs = ({ breadcrumbsRoutes }) => (
  <section>
    <Container>
      <div className="flex flex-row items-center flex-wrap pt-[12px] pb-[12px] md:pt-[16px] md:pb-[16px] lg:pb-[32px]">
        {breadcrumbsRoutes.map((row, index) => (
          <React.Fragment key={row.id}>
            {index !== breadcrumbsRoutes.length - 1 && row.link && (
              <Link
                href={row.link}
                className="text-[16px] font-[500] text-textLight-disabled hover:text-textLight-primary"
              >
                {row.text}
              </Link>
            )}

            {index !== breadcrumbsRoutes.length - 1 && !row.link && (
              <span className="text-[16px] font-[500] text-textLight-disabled">
                {row.text}
              </span>
            )}

            {/* sepparator */}
            {index !== breadcrumbsRoutes.length - 1 && (
              <div className="w-[6px] flex items-center justify-center mx-[4px] text-textLight-disabled">
                <ArrowBackIosIcon
                  style={{
                    marginRight: -5,
                    fontSize: 10,
                  }}
                />
              </div>
            )}

            {index === breadcrumbsRoutes.length - 1 && (
              <span className="text-[16px] font-medium text-primary">
                {row.text}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </Container>
  </section>
)

export default CustomBreadcrumbs

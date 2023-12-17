'use client'
import { Close } from '@/components/common/icons'
import React from 'react'
import * as S from '../../styles/Policy.styled'
import { Link } from 'react-scroll'
import { TERMS_CONTENT_DATA, TERMS_INDEX_DATA } from '@/constants/policy'
import { nanoid } from 'nanoid'
import { goBackHandler } from '@/util/common'

const TermsOfUse = () => {
  return (
    <S.PolicyWrapper>
      <S.PolicyHeader>
        <h1>서비스 이용약관</h1>
        <S.CloseBtn onClick={goBackHandler}>
          <Close />
        </S.CloseBtn>
      </S.PolicyHeader>
      <S.PolicyBody>
        <S.PolicyDate>
          <p>공고일자 : 2023년 12월 01일</p>
          <p>시행일자 : 2023년 12월 01일</p>
        </S.PolicyDate>
        <S.PolicyIndex>
          <p>목차</p>
          <ol>
            {TERMS_INDEX_DATA.map((data) => (
              <Link to={String(data.idx)} spy={true} smooth={true} key={nanoid()}>
                <li style={{ textDecoration: 'underline' }}>{data.text}</li>
              </Link>
            ))}
          </ol>
        </S.PolicyIndex>
        <S.PolicyContent>
          {TERMS_CONTENT_DATA.map((data) => (
            <S.PolicyContentItem key={nanoid()} id={String(data.idx)}>
              <h2>{data.title}</h2>
              <div>
                {data.content.map((content) => (
                  <p
                    key={nanoid()}
                    dangerouslySetInnerHTML={{ __html: content.text.replace(/\n/g, '<br/>') }}
                  ></p>
                ))}
              </div>
            </S.PolicyContentItem>
          ))}
        </S.PolicyContent>
      </S.PolicyBody>
    </S.PolicyWrapper>
  )
}

export default TermsOfUse

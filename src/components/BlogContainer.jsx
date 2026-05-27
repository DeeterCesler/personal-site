import React from 'react';
import { Helmet } from 'react-helmet-async';
import Scroller from "circle-scroll";
import './style.css'
import MoreBlogsFooter from './MoreBlogsFooter';
import { SITE, SITE_URL, DEFAULT_OG_IMAGE } from '../seo/routes';

const toIsoDate = (input) => {
    if (!input) return undefined
    const d = new Date(input)
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10)
}

const BlogContainer = (props) => {
    const url = props.shortRef ? `${SITE_URL}/blog/${props.shortRef}` : SITE_URL
    const datePublished = toIsoDate(props.publishedDate)
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.title,
        author: { '@type': 'Person', name: SITE, url: SITE_URL },
        publisher: { '@type': 'Person', name: SITE, url: SITE_URL },
        image: DEFAULT_OG_IMAGE,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
        ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
    }
    return <main className="home blog-container">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
                <meta property="og:type" content="article" />
                {datePublished && <meta property="article:published_time" content={datePublished} />}
            </Helmet>
            <h1 className="header">{props.title}</h1>
            {props.host && <span className="author"><i>Originally hosted on {props.host}</i></span>}
            <br/>
            {props.publishedDate && <span className="published-date"><i>Published: {props.publishedDate}</i></span>}
                <div className="mini-spacer"/>
                <Scroller link="/blog">
                    <div className="blog-text">
                        {props.children}
                    </div>
                </Scroller>
                <div className="blog-divider" />
                <div className="mini-spacer"/>
                <h2>Other Blogs</h2>
                <br/>
                <MoreBlogsFooter shortRef={props.shortRef} />
                <div className="mini-spacer"/>
        </main>
}

export default BlogContainer;

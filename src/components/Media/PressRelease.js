import React from 'react'
import data from './utils/data'

export default function PressRelease() {
    return (
        <>
            {data.map(item => (
                <div className="press-release-container">
                    <div className="press-release-left">
                        <h2>{item.pressCoverage}</h2>
                    </div>
                    <div className="press-release-right">
                        {
                            item.data.map(release => (
                                <div className="press-release-right-items">
                                    <a href={release.url} target="blank" className="press-release-headline">{release.headline}</a>
                                    <p className="press-release-date">Posted on {release.date}</p>
                                    <p className="press-release-publication"><b>Publication:</b> {release.publication}</p>
                                    <p className="press-release-item"><b>Edition:</b> {release.edition}</p>
                                    <p className="press-release-item"><b>Journalist:</b> {release.journalist}</p>
                                    {release.student && <p className="press-release-item"><b>Students:</b> {release.student}</p>}
                                    {release.professor && <p className="press-release-item"><b>Professor:</b> {release.professor}</p>}
                                </div>
                            
                            ))
                        }
                    </div>
                </div>
            ))}
            </>
    )
}

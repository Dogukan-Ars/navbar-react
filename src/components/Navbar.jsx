import React from "react";
import {data} from "../data.js"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar">
            {data.map(a => {
                return(
                    <div key={a.id}>
                    <li><Link to={a.paths}>{a.title}</Link></li>
                    <ul>
                        {a.subtitles && a.subtitles.map(b => {
                            return (
                                <div key={b.id}>
                                    <li><Link to={b.paths}>{b.subtitle}</Link></li>
                                    <ul>
                                        {b.items && b.items.map(c => {
                                            return (
                                                <div key={c.id}>
                                                    <li><Link to={c.paths}>{c.item}</Link></li>
                                                    <ul>
                                                        {c.subitems && c.subitems.map(d => {
                                                            return (
                                                                <li><Link to={d.paths}>{d.subitem}</Link></li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </ul>
                    </div>
                )
            })}
        </div>
    )
}
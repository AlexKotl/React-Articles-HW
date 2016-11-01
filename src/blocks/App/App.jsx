import React, { Component } from 'react';
import {render} from 'react-dom';
import Page from 'blocks/Page/Page.jsx';
import EventEmitter from 'event-emitter'

window.ee = new EventEmitter();

render (
    <Page />,
    document.getElementById('content')
)

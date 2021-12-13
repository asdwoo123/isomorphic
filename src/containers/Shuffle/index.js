import React, {Component} from 'react';
import shuffle from 'lodash/shuffle';
import articles from './config';
import ListItem from './listItem';
import Box from '../../components/utility/box';
import firebase from "firebase";
import ContentHolder from '../../components/utility/contentHolder';
import clone from 'clone';
import {Row, Col} from 'antd';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removedArticles: [],
            view: 'grid',
            order: 'asc',
            sortingMethod: 'chronological',
            enterLeaveAnimation: 'accordionVertical',
            articles,
            project: []
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.toggleSort = this.toggleSort.bind(this);
        this.sortRotate = this.sortRotate.bind(this);
        this.sortShuffle = this.sortShuffle.bind(this);
    }

    async componentDidMount() {
        try {
            const projectDOC = await firebase.firestore().collection('project')
                .doc(localStorage.getItem('user_id')).get();
            if (projectDOC.exists) {
                const {projects} = projectDOC.data();
                const investorDOC = await Promise.all(projects.map(project =>
                    firebase.firestore().collection('investors').doc(project).get()));
                let investors = investorDOC.map(investorDOC => investorDOC.data());
                investors = investors.filter(data => data.name !== undefined);
                investors.map(investor => {
                    const stations = investor.stations.filter(station => station.name !== undefined);
                    investor.stations = stations;
                });
                investors.forEach((investor, indexx) => {
                    const project = {};
                    project.name = investor.name;
                    project.datas = [];
                    investor.stations.forEach(async (station, index) => {
                        const data = {};
                        data.name = station.name;
                        data.url = investor.connect;
                        data.port = station.port;
                        data.cctv = false;
                        project.datas[index] = data;
                        this.updateDatas(project, indexx);
                    });
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    updateDatas = (project, index) => {
        const projects = clone(this.state.project);
        projects[index] = project;
        this.setState({
            project: projects
        });
    };

    toggleList() {
        this.setState({
            view: 'list',
            enterLeaveAnimation: 'accordionVertical'
        });
    }

    toggleGrid() {
        this.setState({
            view: 'grid',
            enterLeaveAnimation: 'accordionHorizontal'
        });
    }

    toggleSort() {
        const sortAsc = (a, b) => a.timestamp - b.timestamp;
        const sortDesc = (a, b) => b.timestamp - a.timestamp;

        this.setState({
            order: this.state.order === 'asc' ? 'desc' : 'asc',
            sortingMethod: 'chronological',
            articles: this.state.articles.sort(
                this.state.order === 'asc' ? sortDesc : sortAsc
            )
        });
    }

    sortShuffle() {
        this.setState({
            sortingMethod: 'shuffle',
            articles: shuffle(this.state.articles)
        });
    }

    moveArticle(source, dest, id) {
        const sourceArticles = this.state[source].slice();
        let destArticles = this.state[dest].slice();

        if (!sourceArticles.length) return;

        // Find the index of the article clicked.
        // If no ID is provided, the index is 0
        const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

        // If the article is already removed, do nothing.
        if (i === -1) return;

        destArticles = [].concat(sourceArticles.splice(i, 1), destArticles);

        this.setState({
            [source]: sourceArticles,
            [dest]: destArticles
        });
    }

    sortRotate() {
        const articles = this.state.articles.slice();
        articles.unshift(articles.pop());

        this.setState({
            sortingMethod: 'rotate',
            articles
        });
    }

    renderArticles(station) {
        return station.map((article, i) => {
            return (
                <ListItem
                    key={i}
                    view={this.state.view}
                    url={article.url}
                    port={article.port}
                    name={article.name}
                    index={i}
                    {...article}
                />
            );
        });
    }

    render() {
        return (
            <LayoutWrapper>
                    {
                        this.state.project.map((project, index) => (
                            <Box key={index} title={project.name}>
                                <ContentHolder>
                                    <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                                        {this.renderArticles(project.datas)}
                                    </Row>
                                </ContentHolder>
                            </Box>
                        ))
                    }
            </LayoutWrapper>
        );
    }
}

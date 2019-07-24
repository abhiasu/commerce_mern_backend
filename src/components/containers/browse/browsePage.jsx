import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import {searchProducts} from "../../../redux/action";
class BrowsePageComponent extends Component {
    constructor(props) {
        super(props);
        // var filterData = [];
        // var sortedFilterData = [];
        // var resData = {
        //     "self": {
        //         "type": "offersearches.offer-search-result",
        //         "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/1?zoom=element,element:definition,facets:element,facets:element:facetselector:choice:description",
        //         "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/1?zoom=element,element:definition,facets:element,facets:element:facetselector:choice:description"
        //     },
        //     "messages": [],
        //     "links": [
        //         {
        //             "rel": "element",
        //             "type": "offers.offer",
        //             "uri": "/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //         },
        //         {
        //             "rel": "element",
        //             "type": "offers.offer",
        //             "uri": "/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //         },
        //         {
        //             "rel": "facets",
        //             "rev": "offersearchresult",
        //             "type": "offersearches.facets",
        //             "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets",
        //             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets"
        //         }
        //     ],
        //     "_element": [
        //         {
        //             "self": {
        //                 "type": "offers.offer",
        //                 "uri": "/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                 "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //             },
        //             "messages": [],
        //             "links": [
        //                 {
        //                     "rel": "availability",
        //                     "rev": "offer",
        //                     "type": "availabilities.availability-for-offer",
        //                     "uri": "/availabilities/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/availabilities/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                 },
        //                 {
        //                     "rel": "definition",
        //                     "rev": "offer",
        //                     "type": "offerdefinitions.offer-definition",
        //                     "uri": "/offerdefinitions/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offerdefinitions/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                 },
        //                 {
        //                     "rel": "code",
        //                     "rev": "offer",
        //                     "type": "offers.code-for-offer",
        //                     "uri": "/offers/code/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/code/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                 },
        //                 {
        //                     "rel": "components",
        //                     "rev": "offer",
        //                     "type": "offers.offer-components",
        //                     "uri": "/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=/components",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=/components"
        //                 },
        //                 {
        //                     "rel": "items",
        //                     "rev": "offer",
        //                     "type": "offers.offer-items",
        //                     "uri": "/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=/items",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=/items"
        //                 },
        //                 {
        //                     "rel": "pricerange",
        //                     "rev": "offer",
        //                     "type": "prices.offer-price-range",
        //                     "uri": "/prices/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/prices/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                 }
        //             ],
        //             "_definition": [
        //                 {
        //                     "self": {
        //                         "type": "offerdefinitions.offer-definition",
        //                         "uri": "/offerdefinitions/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                         "href": "http://ffz-sandbox-2.epdemos.com/cortex/offerdefinitions/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                     },
        //                     "messages": [],
        //                     "links": [
        //                         {
        //                             "rel": "offer",
        //                             "rev": "definition",
        //                             "type": "offers.offer",
        //                             "uri": "/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t=",
        //                             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmdnn5rwqyk7nvqwgy3infqxi33t="
        //                         }
        //                     ],
        //                     "details": [
        //                         {
        //                             "display-name": "Product Image",
        //                             "display-value": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/bundle_mocha_macchiatos_sku.png",
        //                             "name": "productImage",
        //                             "value": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/bundle_mocha_macchiatos_sku.png"
        //                         },
        //                         {
        //                             "display-name": "Base Calorie",
        //                             "display-value": "120",
        //                             "name": "base_calorie",
        //                             "value": 120
        //                         }
        //                     ],
        //                     "display-name": "Mocha Macchiatos"
        //                 }
        //             ]
        //         },
        //         {
        //             "self": {
        //                 "type": "offers.offer",
        //                 "uri": "/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                 "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //             },
        //             "messages": [],
        //             "links": [
        //                 {
        //                     "rel": "availability",
        //                     "rev": "offer",
        //                     "type": "availabilities.availability-for-offer",
        //                     "uri": "/availabilities/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/availabilities/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                 },
        //                 {
        //                     "rel": "definition",
        //                     "rev": "offer",
        //                     "type": "offerdefinitions.offer-definition",
        //                     "uri": "/offerdefinitions/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offerdefinitions/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                 },
        //                 {
        //                     "rel": "code",
        //                     "rev": "offer",
        //                     "type": "offers.code-for-offer",
        //                     "uri": "/offers/code/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/code/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                 },
        //                 {
        //                     "rel": "components",
        //                     "rev": "offer",
        //                     "type": "offers.offer-components",
        //                     "uri": "/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=/components",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=/components"
        //                 },
        //                 {
        //                     "rel": "items",
        //                     "rev": "offer",
        //                     "type": "offers.offer-items",
        //                     "uri": "/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=/items",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=/items"
        //                 },
        //                 {
        //                     "rel": "pricerange",
        //                     "rev": "offer",
        //                     "type": "prices.offer-price-range",
        //                     "uri": "/prices/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/prices/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                 }
        //             ],
        //             "_definition": [
        //                 {
        //                     "self": {
        //                         "type": "offerdefinitions.offer-definition",
        //                         "uri": "/offerdefinitions/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                         "href": "http://ffz-sandbox-2.epdemos.com/cortex/offerdefinitions/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                     },
        //                     "messages": [],
        //                     "links": [
        //                         {
        //                             "rel": "offer",
        //                             "rev": "definition",
        //                             "type": "offers.offer",
        //                             "uri": "/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq=",
        //                             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offers/wawastore/qgqvbmtdmfzgc3lfnrpw2yldmnugsylun5zq="
        //                         }
        //                     ],
        //                     "details": [
        //                         {
        //                             "display-name": "Product Image",
        //                             "display-value": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/bundle_caramel_macchiatos_sku.png",
        //                             "name": "productImage",
        //                             "value": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/bundle_caramel_macchiatos_sku.png"
        //                         },
        //                         {
        //                             "display-name": "Base Calorie",
        //                             "display-value": "90",
        //                             "name": "base_calorie",
        //                             "value": 90
        //                         }
        //                     ],
        //                     "display-name": "Caramel Macchiatos"
        //                 }
        //             ]
        //         }
        //     ],
        //     "_facets": [
        //         {
        //             "_element": [
        //                 {
        //                     "self": {
        //                         "type": "offersearches.facet",
        //                         "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=",
        //                         "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha="
        //                     },
        //                     "messages": [],
        //                     "links": [
        //                         {
        //                             "rel": "facets",
        //                             "type": "offersearches.facets",
        //                             "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets",
        //                             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets"
        //                         },
        //                         {
        //                             "rel": "facetselector",
        //                             "rev": "facet",
        //                             "type": "offersearches.facet-selector",
        //                             "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/selector",
        //                             "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/selector"
        //                         }
        //                     ],
        //                     "_facetselector": [
        //                         {
        //                             "_choice": [
        //                                 {
        //                                     "_description": [
        //                                         {
        //                                             "self": {
        //                                                 "type": "offersearches.facet-value",
        //                                                 "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwutcmbqeawsamrqgczemyldmv2cavtbnr2wkicgnfwhizlswzqxeytbonsv6y3bnrxxe2lfl4ytambngiyda=",
        //                                                 "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwutcmbqeawsamrqgczemyldmv2cavtbnr2wkicgnfwhizlswzqxeytbonsv6y3bnrxxe2lfl4ytambngiyda="
        //                                             },
        //                                             "messages": [],
        //                                             "links": [
        //                                                 {
        //                                                     "rel": "facetselectorchoice",
        //                                                     "type": "offersearches.facet-selector-choice",
        //                                                     "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwutcmbqeawsamrqgczemyldmv2cavtbnr2wkicgnfwhizlswzqxeytbonsv6y3bnrxxe2lfl4ytambngiyda=/choice",
        //                                                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwutcmbqeawsamrqgczemyldmv2cavtbnr2wkicgnfwhizlswzqxeytbonsv6y3bnrxxe2lfl4ytambngiyda=/choice"
        //                                                 }
        //                                             ],
        //                                             "count": "1",
        //                                             "value": "100 - 200"
        //                                         }
        //                                     ]
        //                                 },
        //                                 {
        //                                     "_description": [
        //                                         {
        //                                             "self": {
        //                                                 "type": "offersearches.facet-value",
        //                                                 "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwttaibneaytamfsizqwgzlueblgc3dvmuqem2lmorsxfndbojrgc43fl5rwc3dpojuwkxzqfuytama=",
        //                                                 "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwttaibneaytamfsizqwgzlueblgc3dvmuqem2lmorsxfndbojrgc43fl5rwc3dpojuwkxzqfuytama="
        //                                             },
        //                                             "messages": [],
        //                                             "links": [
        //                                                 {
        //                                                     "rel": "facetselectorchoice",
        //                                                     "type": "offersearches.facet-selector-choice",
        //                                                     "uri": "/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwttaibneaytamfsizqwgzlueblgc3dvmuqem2lmorsxfndbojrgc43fl5rwc3dpojuwkxzqfuytama=/choice",
        //                                                     "href": "http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/qkugwzlzo5xxezdtvfrgk5tfojqwozltvfygcz3ffvzws6tfurxhk3dm=/filters/qgqka=/facets/mqztkn3cg4zdmljwmfsgiljugy3tiljzhazgiljvge3gcyzrmmzggnrvha=/value/qoyumyldmv2cavtbnr2wkicdn52w45fbgg4emyldmv2cavtbnr2wkicenfzxa3dbpeqe4ylnmwttaibneaytamfsizqwgzlueblgc3dvmuqem2lmorsxfndbojrgc43fl5rwc3dpojuwkxzqfuytama=/choice"
        //                                                 }
        //                                             ],
        //                                             "count": "1",
        //                                             "value": "0 - 100"
        //                                         }
        //                                     ]
        //                                 }
        //                             ]
        //                         }
        //                     ],
        //                     "display-name": "Base Calorie"
        //                 }
        //             ]
        //         }
        //     ],
        //     "pagination": {
        //         "current": 1,
        //         "page-size": 0,
        //         "pages": 1,
        //         "results": 2,
        //         "results-on-page": 2
        //     }
        // }

       

        // resData._facets[0]._element[0]._facetselector[0]._choice.map(record => (
        //     filterData.push(record._description[0].value)
        // ))
        // sortedFilterData.push(filterData.sort());


        this.state = {
            // resData: resData,
            // sortedFilterData: sortedFilterData,
            //  value: true,
        }
    }

    handleFilter = (value) => {
        console.log("value-----------",value);
    };

    shouldComponentUpdate(nextProps, nextState) {
         if(Object.keys(nextProps.searchData).length>0){
           return true; 
         }
         return false;
    }
    render() {
        console.log();
        var sortedFilterData = [];
        var filterData = [];
        if(Object.keys(this.props.searchData).length > 0){
            this.props.searchData._facets[0]._element[0]._facetselector[0]._choice.map(record => (
            filterData.push(record._description[0].value)
        ))
        sortedFilterData.push(filterData.sort());
        }
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xs-12">
                        <div className="left-filter">
                            <div className="filter-box">
                            
                                <h3>{(Object.keys(this.props.searchData).length > 0)?this.props.searchData._facets[0]._element[0]["display-name"]:null}</h3>
                                <ul>
                                    {(sortedFilterData.length > 0)?
                                        sortedFilterData[0].map((record,i) => (
                                            <li key={i} >
                                                <label htmlFor="">
                                                    <input type="checkbox"   onChange={this.handleFilter.bind(this, record) }/>  {record}
                                                </label>
                                            </li>
                                        )): null
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-9 col-xs-12">
                        <div className="right-section">
                            <div className="filter-content">
                                {(Object.keys(this.props.searchData).length > 0)?
                                    this.props.searchData._element.map((record,i) => (
                                        <div className="productWrapper" key={i} >
                                            <img src={record._definition[0].details[0].value} /><b><center>{record._definition[0].details[0].name}</center></b>
                                        </div>
                                    )):null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    };

}
const mapStateToProps = (state) => {
    return {
        searchData: state.productSearchedData,
        accessToken: state.accessToken

    }
}
export default connect(mapStateToProps, { searchProducts })(withRouter(BrowsePageComponent));

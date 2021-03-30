import React from 'react';
import './Summrizer.css'

const Summarizer = () => {

    return (
        <div className="body-wrapper">
            <button type="button" className="btn btn-primary pull-right"><span>요약하기</span></button>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"/>
            <button type="button" className="btn btn-default btn-sm">
                <i className="material-icons">content_copy</i>
            </button>
            <button type="button" className="btn btn-default btn-sm custom">
                <i className="material-icons">star_border</i>
            </button>


            <textarea className="form-control" placeholder="Readonly input here…" rows="5" readOnly/>
            <div className="text-center">
                <button type="button" className="btn btn-primary"><span>즐겨찾기 한 요약 보기</span></button>
            </div>
        </div>
    );
}

export default Summarizer;
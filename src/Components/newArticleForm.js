import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { postArticle } from '../Services/articleRestServices'
import 'react-quill/dist/quill.snow.css';
// import './AdminCSS/newArticleForm.scss'

function NewArticleForm(props) {
    const [articleObj] = useState({})

    const setChanges = (eventValue, inputValue) => {
        articleObj[inputValue] = eventValue
    }

    const submitForm = async () => {
        const articleData = new FormData()
        for (let [k, v] of Object.entries(articleObj)) {
            if (k !== "articleIMG") {
                console.log(k, v)
                articleData.append(k, v)
            }
        }
        articleData.append('article', articleObj.articleIMG)
        console.log(articleData)
        await postArticle(articleData)
    }

    return (
        <div className="new_form_container">
            <div className='metaContainer'>
                <input
                    onChange={(event) => setChanges(event.target.value, 'article_title')}
                    type="text"
                    maxLength='80'
                    placeholder="Article Title"
                />
                <br></br>
                <input
                    onChange={(event) => setChanges(event.target.value, 'article_description')}
                    type="text"
                    maxLength='80'
                    placeholder="Article Description"
                />
                <br></br>
                <input
                    type="file"
                    style={{ width: 'auto' }}
                    onChange={(event) => setChanges(event.target.files[0], 'articleIMG')}
                />
                <br></br>
                <input
                    type='datetime-local'
                    onChange={(event) => setChanges(event.target.value, 'articleLiveDate')}
                />
            </div>

            <div className="editorContainer">
                <ReactQuill
                    style={{ backgroundColor: 'white' }}
                    onChange={(x) => setChanges(x, 'article_content')}
                    theme='snow'
                    placeholder={"Start typing heree..."}
                    modules={{
                        toolbar: [
                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                            [{ size: [] }],
                            [{ 'align': ['', 'center', 'right', 'justify'] }],
                            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                            { 'indent': '-1' }, { 'indent': '+1' }, { 'align': 'center' }],
                            ['link', 'image', 'video'],
                            ['clean']
                        ]
                    }}
                />
                <button className="submitBtn" onClick={() => submitForm()} >Submit</button>
            </div>
            {/* <div>
                {articleObj ? articleObj : null}
            </div> */}
        </div>
    )
}

export default NewArticleForm

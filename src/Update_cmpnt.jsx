function Update_cmpnt({ title, body, date}) {
    
    
    
    return (
        <div>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <span>{title}</span>
                    <span>{date}</span>
                </div>
                <div className="card-body">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Update_cmpnt
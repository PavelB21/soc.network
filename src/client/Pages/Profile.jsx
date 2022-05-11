import '../Style/ProfileStyle.css';

const Profile = () => {
    return (
        <div className="container">
            <div className="main-body">
                <div className="col-md-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Фамиля</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    Батманов
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Имя</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    Павел
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">ВУЗ</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    Чебоксарский Кооперативный Институт
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Группа</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    ПИ(ПИУ)1-О/Бп/ЧБ21
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
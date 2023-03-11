import React from 'react';

const RegularMenu = () => (
  <div className="modal fade" id="RegularMenu" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div className="modal-dialog modal-sm modal-fullscreen" role="document">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h5 className="modal-title" id="modalTitleId" style={{ opacity: 0 }}>Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />

        </div>
        <div className="modal-body d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="app__navbar--logo d-flex justify-content-start align-items-center fw-bold m-0" style={{ color: 'goldenrod' }}>
              Viand
            </h1>
            Menu comming soon!
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default RegularMenu;

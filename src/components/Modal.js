import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
    hidden: {
        y: '-110vh',
        opacity: 0,
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {delay: 0.5}
    }
}
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div variants={modal} className="modal">
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

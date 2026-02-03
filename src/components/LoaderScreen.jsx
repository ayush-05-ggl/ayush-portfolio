import { motion, AnimatePresence } from "framer-motion";

export default function LoaderScreen({ isDone }) {
  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="loaderCard">
            <div className="loaderTitle">Entering Orbit…</div>
            <div className="loaderSub">Loading space scene</div>
            <div className="loaderBar">
              <div className="loaderFill" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

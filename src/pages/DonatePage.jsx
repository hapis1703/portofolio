import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, X, Loader2, Check } from "lucide-react";
import { useState } from "react";
import { createQRIS, checkQRISStatus } from "../utils/api";

export default function DonatePage({ colors }) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [qrData, setQrData] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleDonate = async () => {
    if (!amount || amount <= 0) return;

    setLoading(true);

    const result = await createQRIS(amount);

    if (result.success) {
      setQrData(result.data);
      setShowModal(true);
    } else {
      alert("Failed to generate QRIS. Please try again.");
    }

    setLoading(false);
  };

  const checkPaymentStatus = async () => {
    if (!qrData?.transaction_id) return;

    setCheckingStatus(true);

    const result = await checkQRISStatus(qrData.transaction_id);

    if (result.success && result.status === "success") {
      setPaymentSuccess(true);
    }

    setCheckingStatus(false);
  };

  return (
    <section className={`min-h-screen py-20 px-4 ${colors.bgAlt}`}>
      <div className="max-w-xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl font-black mb-4 ${colors.text}`}>
            Support Me
          </h2>
          <p className={colors.textMuted}>Buy me a coffee via QRIS</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className={`rounded-2xl p-8 border backdrop-blur-md ${colors.card}`}
        >
          <div className="space-y-6">
            <div>
              <label
                className={`block text-sm font-medium mb-2 ${colors.textMuted}`}
              >
                Payment Method
              </label>
              <div
                className={`px-4 py-3 rounded-xl border ${colors.card} ${colors.text} flex items-center gap-2`}
              >
                <DollarSign size={20} className={`text-${colors.primary}`} />
                <span className="font-semibold">QRIS</span>
              </div>
            </div>

            <div>
              <label
                className={`block text-sm font-medium mb-2 ${colors.textMuted}`}
              >
                Nominal (IDR)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                placeholder="10000"
                className={`w-full px-4 py-3 rounded-xl border transition duration-100 focus:outline-none focus:ring-2 focus:ring-${colors.primary} ${colors.card} ${colors.text}`}
              />
            </div>

            <motion.button
              onClick={handleDonate}
              disabled={loading || !amount || amount <= 0}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              transition={{ duration: 0.1 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition duration-100 ${colors.button} text-white disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Generating QRIS...
                </>
              ) : (
                <>
                  <DollarSign size={20} />
                  DONATE
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && qrData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full rounded-2xl p-8 border backdrop-blur-md ${colors.card} relative`}
            >
              <button
                onClick={() => setShowModal(false)}
                className={`absolute top-4 right-4 p-2 rounded-lg transition ${colors.textMuted} hover:text-${colors.primary}`}
              >
                <X size={24} />
              </button>

              <div className="text-center">
                <h3 className={`text-2xl font-black mb-2 ${colors.text}`}>
                  {paymentSuccess ? "Pembayaran Berhasil!" : "Scan QR Code"}
                </h3>
                {!paymentSuccess && (
                  <p className={`mb-6 ${colors.textMuted}`}>
                    Amount: IDR {parseInt(amount).toLocaleString("id-ID")}
                  </p>
                )}

                {paymentSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-500 rounded-2xl p-12 mb-6 inline-flex flex-col items-center justify-center"
                  >
                    <Check
                      size={80}
                      className="text-white mb-4"
                      strokeWidth={3}
                    />
                    <p className="text-white text-xl font-bold">
                      Pembayaran Berhasil!
                    </p>
                  </motion.div>
                ) : (
                  <div className="bg-white p-4 rounded-xl mb-6 inline-block">
                    <img
                      src={qrData.qr_url}
                      alt="QRIS Code"
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                )}

                <motion.button
                  onClick={checkPaymentStatus}
                  disabled={checkingStatus || paymentSuccess}
                  whileHover={{
                    scale: checkingStatus || paymentSuccess ? 1 : 1.02,
                  }}
                  whileTap={{
                    scale: checkingStatus || paymentSuccess ? 1 : 0.98,
                  }}
                  transition={{ duration: 0.1 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition duration-100 ${paymentSuccess ? "bg-blue-400 text-white" : `${colors.button} text-white`} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {paymentSuccess ? (
                    <>
                      <Check size={18} />✓ Pembayaran Berhasil
                    </>
                  ) : checkingStatus ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Checking...
                    </>
                  ) : (
                    "Cek Status Pembayaran"
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

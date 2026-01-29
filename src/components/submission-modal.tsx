import { useEffect } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface SubmissionModalProps {
  status: "success" | "error" | "idle";
  onClose: () => void;
}

export const SubmissionModal = ({ status, onClose }: SubmissionModalProps) => {
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  if (status === "idle") return null;

  const isSuccess = status === "success";

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {isSuccess ? (
              <CheckCircle className="h-6 w-6 text-green-600" />
            ) : (
              <AlertCircle className="h-6 w-6 text-red-600" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${isSuccess ? "text-green-800" : "text-red-800"}`}>
              {isSuccess ? "Sucesso!" : "Erro ao enviar"}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {isSuccess
                ? "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve."
                : "Não foi possível enviar sua mensagem. Verifique se o telefone está no formato correto (XX) XXXXX-XXXX e tente novamente."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
